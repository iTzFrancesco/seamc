import customtkinter as ctk
from tkinter import filedialog
import json
import os

ctk.set_appearance_mode("dark")
ctk.set_default_color_theme("dark-blue")

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
CONFIG_FILE = os.path.join(SCRIPT_DIR, "staff_editor_config.txt")

PROJECT_PATH = None

def get_project_path():
    global PROJECT_PATH
    if PROJECT_PATH:
        return PROJECT_PATH
    if os.path.exists(CONFIG_FILE):
        with open(CONFIG_FILE, "r") as f:
            PROJECT_PATH = f.read().strip()
            return PROJECT_PATH
    return None

def save_project_path(path):
    global PROJECT_PATH
    PROJECT_PATH = path
    with open(CONFIG_FILE, "w") as f:
        f.write(path)

def get_json_path():
    proj = get_project_path()
    if proj:
        return os.path.join(proj, "src", "data", "staff-list.json")
    return None

ROLES = [
    "Owner", "Manager", "Sr. Admin", "Admin",
    "Sr. Developer", "Developer", "Jr. Developer",
    "Builder", "Sr. Mod", "Mod", "Jr. Mod",
    "Helper", "Jr. Helper","ChatMod"
]

class StaffEditor(ctk.CTk):
    def __init__(self):
        super().__init__()
        self.title("Staff Editor - JadeMC")
        self.geometry("950x650")
        self.edit_index = None
        self.edit_role = None
        self.actual_edit_index = None
        self.has_changes = False
        self.changes_log = []
        
        self.load_data()
        self.setup_ui()
        
    def load_data(self):
        json_file = get_json_path()
        
        while not json_file or not os.path.exists(json_file):
            project_path = filedialog.askdirectory(title="Seleziona la cartella del progetto JadeMC")
            if not project_path:
                self.destroy()
                return
            save_project_path(project_path)
            json_file = get_json_path()
        
        try:
            with open(json_file, "r", encoding="utf-8") as f:
                self.staff_data = json.load(f)
        except FileNotFoundError:
            self.staff_data = {role: [] for role in ROLES}
    
    def save_data(self):
        if not self.has_changes:
            self.status_label.configure(text="Nessuna modifica da salvare!", text_color="orange")
            return
        json_file = get_json_path()
        os.makedirs(os.path.dirname(json_file), exist_ok=True)
        with open(json_file, "w", encoding="utf-8") as f:
            json.dump(self.staff_data, f, indent=2, ensure_ascii=False)
        self.has_changes = False
        self.btn_save.configure(state="disabled")
        self.status_label.configure(text="Salvato!", text_color="green")
        self.after(2000, lambda: self.status_label.configure(text=" "))
    
    def setup_ui(self):
        self.grid_columnconfigure(1, weight=1)
        self.grid_rowconfigure(0, weight=1)
        
        self.sidebar = ctk.CTkFrame(self, width=200, corner_radius=0)
        self.sidebar.grid(row=0, column=0, sticky="nsew")
        
        ctk.CTkLabel(self.sidebar, text="Ruoli", font=ctk.CTkFont(size=16, weight="bold")).pack(pady=10)
        
        self.btn_all = ctk.CTkButton(
            self.sidebar, 
            text="👥 Tutti", 
            command=lambda: self.select_role("Tutti"),
            fg_color="#6366f1",
            border_width=1,
            border_color="#6366f1"
        )
        self.btn_all.pack(pady=2, padx=10, fill="x")
        
        ctk.CTkLabel(self.sidebar, text="─────────────", text_color="gray").pack()
        
        self.role_widgets = {}
        for role in ROLES:
            role_color = self.get_role_color(role)
            
            role_frame = ctk.CTkFrame(self.sidebar, fg_color="transparent")
            role_frame.pack(pady=1, padx=5, fill="x")
            
            lbl = ctk.CTkLabel(
                role_frame,
                text=role,
                font=ctk.CTkFont(size=14, weight="bold"),
                text_color=role_color,
                fg_color="transparent"
            )
            lbl.pack(side="left", padx=10)
            
            role_frame.lbl = lbl
            role_frame.role_color = role_color
            role_frame.role = role
            
            def on_enter(e, rf=role_frame):
                rf.lbl.configure(fg_color=rf.role_color, text_color="white")
            
            def on_leave(e, rf=role_frame):
                if self.current_role != rf.role:
                    rf.lbl.configure(fg_color="transparent", text_color=rf.role_color)
                else:
                    rf.lbl.configure(fg_color=rf.role_color, text_color="white")
            
            role_frame.bind("<Button-1>", lambda e, r=role: self.select_role(r))
            lbl.bind("<Button-1>", lambda e, r=role: self.select_role(r))
            role_frame.bind("<Enter>", on_enter)
            role_frame.bind("<Leave>", on_leave)
            lbl.bind("<Enter>", on_enter)
            lbl.bind("<Leave>", on_leave)
            
            self.role_widgets[role] = role_frame
        
        self.main_frame = ctk.CTkFrame(self)
        self.main_frame.grid(row=0, column=1, sticky="nsew", padx=10, pady=10)
        
        form_frame = ctk.CTkFrame(self.main_frame)
        form_frame.pack(fill="x", pady=10)
        
        ctk.CTkLabel(form_frame, text="Nome visualizzato:").grid(row=0, column=0, padx=5, pady=5, sticky="e")
        self.entry_display = ctk.CTkEntry(form_frame, width=250, placeholder_text="obbligatorio")
        self.entry_display.grid(row=0, column=1, padx=5, pady=5)
        
        ctk.CTkLabel(form_frame, text="Nome Minecraft:").grid(row=0, column=2, padx=5, pady=5, sticky="e")
        self.entry_mc = ctk.CTkEntry(form_frame, width=200, placeholder_text="obbligatorio")
        self.entry_mc.grid(row=0, column=3, padx=5, pady=5)
        
        ctk.CTkLabel(form_frame, text="Descrizione:").grid(row=1, column=0, padx=5, pady=5, sticky="e")
        self.entry_desc = ctk.CTkEntry(form_frame, width=400, placeholder_text="facoltativo")
        self.entry_desc.grid(row=1, column=1, columnspan=3, padx=5, pady=5, sticky="w")
        
        ctk.CTkLabel(form_frame, text="Ruolo:").grid(row=2, column=0, padx=5, pady=5, sticky="e")
        self.role_var = ctk.StringVar(value="Owner")
        self.role_menu = ctk.CTkOptionMenu(
            form_frame,
            values=ROLES,
            variable=self.role_var,
            width=200
        )
        self.role_menu.grid(row=2, column=1, padx=5, pady=5, sticky="w")
        
        btn_frame = ctk.CTkFrame(self.main_frame)
        btn_frame.pack(fill="x", pady=5)
        
        self.btn_add = ctk.CTkButton(btn_frame, text="Aggiungi", command=self.add_member, fg_color="green", width=120)
        self.btn_add.pack(side="left", padx=5)
        
        self.btn_cancel = ctk.CTkButton(btn_frame, text="Annulla", command=self.cancel_edit, fg_color="gray", width=80)
        self.btn_cancel.pack(side="left", padx=5)
        self.btn_cancel.configure(state="disabled")
        
        self.btn_save = ctk.CTkButton(btn_frame, text="Salva JSON", command=self.save_data, fg_color="blue", width=100, state="disabled")
        self.btn_save.pack(side="right", padx=5)
        
        self.list_label = ctk.CTkLabel(self.main_frame, text="Membri:", font=ctk.CTkFont(size=14, weight="bold"))
        self.list_label.pack(pady=(10, 5))
        
        self.info_label = ctk.CTkLabel(
            self.main_frame, 
            text="Rank │ Nome visualizzato │ Nome Minecraft │ Descrizione",
            font=ctk.CTkFont(size=11),
            text_color="gray"
        )
        self.info_label.pack(pady=(0, 5))
        
        self.members_frame = ctk.CTkScrollableFrame(self.main_frame)
        self.members_frame.pack(fill="both", expand=True, pady=5)
        
        self.status_label = ctk.CTkLabel(self.main_frame, text=" ")
        self.status_label.pack(pady=5)
        
        git_frame = ctk.CTkFrame(self.main_frame, fg_color="transparent")
        git_frame.pack(fill="x", pady=10)
        
        self.git_info_label = ctk.CTkLabel(
            git_frame, 
            text="",
            font=ctk.CTkFont(size=10),
            text_color="gray"
        )
        self.git_info_label.pack(side="left", padx=5)
        
        self.btn_log = ctk.CTkButton(
            git_frame, 
            text="📜 Log", 
            command=self.show_git_log,
            fg_color="#64748b",
            width=80
        )
        self.btn_log.pack(side="left", padx=5)
        
        self.btn_confirm = ctk.CTkButton(
            git_frame, 
            text="Conferma Push", 
            command=self.enable_push,
            fg_color="orange",
            width=130
        )
        self.btn_confirm.pack(side="right", padx=5)
        
        self.btn_push = ctk.CTkButton(
            git_frame, 
            text="Git Push", 
            command=self.git_push,
            fg_color="#7c3aed",
            width=100,
            state="disabled"
        )
        self.btn_push.pack(side="right", padx=5)
        
        self.current_role = None
        self.select_role("Tutti")
        self.update_git_info()
    
    def get_role_color(self, role):
        colors = {
            "Owner": "#ef4444",
            "Manager": "#f59e0b",
            "Sr. Admin": "#ef4444",
            "Admin": "#ef4444",
            "Sr. Developer": "#06b6d4",
            "Developer": "#06b6d4",
            "Jr. Developer": "#06b6d4",
            "Builder": "#eab308",
            "Sr. Mod": "#06b6d4",
            "Mod": "#06b6d4",
            "Jr. Mod": "#06b6d4",
            "Helper": "#22c55e",
            "Jr. Helper": "#22c55e",
            "ChatMod": "#005a1f",
        }
        return colors.get(role, "#6b7280")
    
    def select_role(self, role):
        self.current_role = role
        self.cancel_edit()
        
        self.btn_all.configure(
            fg_color="#6366f1" if role == "Tutti" else "transparent",
            border_color="#6366f1" if role == "Tutti" else "#6366f1"
        )
        
        for r, frame in self.role_widgets.items():
            lbl = frame.lbl
            if r == role:
                lbl.configure(fg_color=self.get_role_color(r), text_color="white")
                lbl.configure(text=f"▶ {r}")
            else:
                lbl.configure(fg_color="transparent", text_color=self.get_role_color(r))
                lbl.configure(text=r)
        
        self.list_label.configure(text=f"Membri - {role}:" if role != "Tutti" else "Tutti gli Staff:")
        
        if role == "Tutti":
            self.role_menu.configure(state="normal")
            self.role_var.set("Owner")
        else:
            self.role_menu.configure(state="normal")
            self.role_var.set(role)
        
        self.refresh_members()
    
    def get_all_members(self):
        all_members = []
        for role in ROLES:
            for member in self.staff_data.get(role, []):
                all_members.append({**member, "_role": role})
        return all_members
    
    def refresh_members(self):
        for widget in self.members_frame.winfo_children():
            widget.destroy()
        
        if self.current_role == "Tutti":
            members = self.get_all_members()
        else:
            members = self.staff_data.get(self.current_role, [])
        
        for i, member in enumerate(members):
            item_frame = ctk.CTkFrame(self.members_frame)
            item_frame.pack(fill="x", pady=2)
            
            member_role = member.get("_role", self.current_role)
            role_color = self.get_role_color(member_role)
            
            role_lbl = ctk.CTkLabel(
                item_frame, 
                text=member_role, 
                font=ctk.CTkFont(size=12, weight="bold"),
                text_color=role_color,
                width=100,
                anchor="w"
            )
            role_lbl.pack(side="left", padx=(10, 5))
            
            name_lbl = ctk.CTkLabel(
                item_frame, 
                text=f"{member.get('displayName', '')}  |  {member.get('mcName', '')}",
                anchor="w"
            )
            name_lbl.pack(side="left", fill="x", expand=True)
            
            if member.get('description'):
                desc_lbl = ctk.CTkLabel(
                    item_frame, 
                    text=f"{member['description']}",
                    text_color="gray",
                    anchor="w"
                )
                desc_lbl.pack(side="left", padx=10)
            
            btn_frame = ctk.CTkFrame(item_frame, fg_color="transparent")
            btn_frame.pack(side="right", padx=5, pady=5)
            
            member_copy = member
            role_for_btns = member_role
            ctk.CTkButton(
                btn_frame, 
                text="✏️", 
                width=35,
                fg_color="#3b82f6",
                hover_color="#2563eb",
                command=lambda idx=i, m=member_copy, r=role_for_btns: self.edit_member(idx, m)
            ).pack(side="left", padx=2)
            
            ctk.CTkButton(
                btn_frame, 
                text="✕", 
                width=35,
                fg_color="#ef4444",
                hover_color="#dc2626",
                command=lambda m=member_copy, r=role_for_btns: self.delete_member_by_member(m, r)
            ).pack(side="left", padx=2)
        
        if not members:
            ctk.CTkLabel(self.members_frame, text="Nessun membro in questo ruolo", text_color="gray").pack()
    
    def edit_member(self, index, member):
        self.edit_index = index
        self.edit_role = member.get("_role", self.current_role)
        
        role_members = self.staff_data.get(self.edit_role, [])
        actual_index = None
        for idx, m in enumerate(role_members):
            if (m.get('displayName') == member.get('displayName') and 
                m.get('mcName') == member.get('mcName')):
                actual_index = idx
                break
        
        self.actual_edit_index = actual_index
        
        self.entry_display.delete(0, "end")
        self.entry_display.insert(0, member.get('displayName', ''))
        
        self.entry_mc.delete(0, "end")
        self.entry_mc.insert(0, member.get('mcName', ''))
        
        self.entry_desc.delete(0, "end")
        self.entry_desc.insert(0, member.get('description', ''))
        
        self.role_var.set(self.edit_role)
        
        self.btn_add.configure(text="Salva Modifiche")
        self.btn_cancel.configure(state="normal")
        
        self.status_label.configure(text=f"Modifica: {member.get('displayName', '')} [{self.edit_role}]", text_color="#3b82f6")
    
    def cancel_edit(self):
        self.edit_index = None
        self.edit_role = None
        self.actual_edit_index = None
        self.entry_display.delete(0, "end")
        self.entry_mc.delete(0, "end")
        self.entry_desc.delete(0, "end")
        self.role_var.set(self.current_role if self.current_role != "Tutti" else "Owner")
        
        self.btn_add.configure(text="Aggiungi")
        self.btn_cancel.configure(state="disabled")
        
        self.status_label.configure(text=" ")
    
    def add_member(self):
        display = self.entry_display.get().strip()
        mc = self.entry_mc.get().strip()
        desc = self.entry_desc.get().strip()
        new_role = self.role_var.get()
        
        if not display or not mc:
            self.status_label.configure(text="Nome visualizzato e Nome Minecraft sono obbligatori!", text_color="red")
            return
        
        if new_role == "Tutti":
            self.status_label.configure(text="Seleziona un ruolo specifico!", text_color="orange")
            return
        
        if self.edit_index is not None:
            old_role = self.edit_role
            old_idx = self.actual_edit_index if self.actual_edit_index is not None else self.edit_index
            
            if old_role != new_role:
                old_member = self.staff_data[old_role][old_idx]
                self.staff_data[old_role].pop(old_idx)
                if new_role not in self.staff_data:
                    self.staff_data[new_role] = []
                self.staff_data[new_role].append({
                    "displayName": display,
                    "mcName": mc,
                    "description": desc
                })
                self.changes_log.append(f"Moved {mc} from {old_role} to {new_role}")
                self.status_label.configure(text=f"Ruolo cambiato da {old_role} a {new_role}! Clicca Salva JSON.", text_color="green")
            else:
                self.staff_data[old_role][old_idx] = {
                    "displayName": display,
                    "mcName": mc,
                    "description": desc
                }
                self.changes_log.append(f"Updated {mc} ({new_role})")
                self.status_label.configure(text="Membro modificato! Clicca Salva JSON.", text_color="green")
        else:
            target_role = new_role if self.current_role == "Tutti" else self.current_role
            if target_role not in self.staff_data:
                self.staff_data[target_role] = []
            self.staff_data[target_role].append({
                "displayName": display,
                "mcName": mc,
                "description": desc
            })
            self.changes_log.append(f"Added {mc} as {target_role}")
            self.status_label.configure(text="Membro aggiunto! Clicca Salva JSON.", text_color="green")
        
        self.has_changes = True
        self.btn_save.configure(state="normal")
        self.cancel_edit()
        self.refresh_members()
    
    def delete_member(self, index, role):
        member = self.staff_data[role][index]
        mc = member.get('mcName', 'Unknown')
        self.staff_data[role].pop(index)
        self.changes_log.append(f"Removed {mc} from {role}")
        self.has_changes = True
        self.btn_save.configure(state="normal")
        self.status_label.configure(text="Membro eliminato! Clicca Salva JSON.", text_color="green")
        self.refresh_members()
    
    def delete_member_by_member(self, member, role):
        role_members = self.staff_data.get(role, [])
        for idx, m in enumerate(role_members):
            if (m.get('displayName') == member.get('displayName') and 
                m.get('mcName') == member.get('mcName')):
                mc = m.get('mcName', 'Unknown')
                self.staff_data[role].pop(idx)
                self.changes_log.append(f"Removed {mc} from {role}")
                self.has_changes = True
                self.btn_save.configure(state="normal")
                self.status_label.configure(text="Membro eliminato! Clicca Salva JSON.", text_color="green")
                self.refresh_members()
                return
    
    def enable_push(self):
        self.btn_push.configure(state="normal")
        self.btn_confirm.configure(state="disabled", text="Confermato!")
        self.status_label.configure(text="Push abilitato! Clicca Git Push.", text_color="#7c3aed")
    
    def update_git_info(self):
        try:
            import subprocess
            proj_path = get_project_path()
            if not proj_path:
                return
            result = subprocess.run(
                ["git", "log", "-1", "--format=%ci", "src/data/staff-list.json"],
                capture_output=True, text=True, cwd=proj_path
            )
            if result.returncode == 0 and result.stdout.strip():
                self.git_info_label.configure(text=f"Ultimo push staff-list.json: {result.stdout.strip()}")
            else:
                self.git_info_label.configure(text="File mai pushato")
        except:
            self.git_info_label.configure(text="")
    
    def show_git_log(self):
        try:
            import subprocess
            proj_path = get_project_path()
            if not proj_path:
                return
            result = subprocess.run(
                ["git", "log", "--format=%h | %ad | %s", "--date=short", "-10", "src/data/staff-list.json"],
                capture_output=True, text=True, cwd=proj_path
            )
            
            log_window = ctk.CTkToplevel(self)
            log_window.title("Git Log - staff-list.json")
            log_window.geometry("600x400")
            
            ctk.CTkLabel(
                log_window, 
                text="Ultimi commit per staff-list.json:",
                font=ctk.CTkFont(size=14, weight="bold")
            ).pack(pady=10)
            
            log_frame = ctk.CTkScrollableFrame(log_window)
            log_frame.pack(fill="both", expand=True, padx=10, pady=10)
            
            if result.returncode == 0 and result.stdout.strip():
                commits = result.stdout.strip().split('\n')
                for commit in commits:
                    ctk.CTkLabel(
                        log_frame,
                        text=commit,
                        font=ctk.CTkFont(size=11),
                        anchor="w"
                    ).pack(fill="x", pady=2)
            else:
                ctk.CTkLabel(log_frame, text="Nessun commit trovato").pack()
            
            ctk.CTkButton(log_window, text="Chiudi", command=log_window.destroy).pack(pady=10)
            
        except Exception as e:
            self.status_label.configure(text=f"Errore nel log: {str(e)}", text_color="red")
    
    def git_push(self):
        import subprocess
        from datetime import datetime
        
        try:
            proj_path = get_project_path()
            json_path = get_json_path()
            
            subprocess.run(["git", "add", json_path], check=True, cwd=proj_path)
            
            date_str = datetime.now().strftime("%d/%m/%Y %H:%M")
            
            if self.changes_log:
                changes_str = ", ".join(self.changes_log)
                commit_msg = f"Update staff-list.json - {changes_str}"
            else:
                commit_msg = f"Update staff-list.json - {date_str}"
            
            subprocess.run(
                ["git", "commit", "-m", commit_msg],
                check=True, cwd=proj_path
            )
            
            subprocess.run(["git", "push"], check=True, cwd=proj_path)
            
            self.changes_log = []
            self.btn_push.configure(state="disabled")
            self.btn_confirm.configure(state="normal", text="Conferma Push")
            self.update_git_info()
            self.status_label.configure(text=f"Push completato! ({date_str})", text_color="green")
            
        except subprocess.CalledProcessError as e:
            self.status_label.configure(text="Errore durante il push!", text_color="red")
        except Exception as e:
            self.status_label.configure(text=f"Errore: {str(e)}", text_color="red")

if __name__ == "__main__":
    try:
        app = StaffEditor()
        app.mainloop()
    except ImportError:
        import tkinter as tk
        root = tk.Tk()
        root.withdraw()
        tk.messagebox.showerror("Errore", "customtkinter non installato.\nEsegui: pip install customtkinter")
