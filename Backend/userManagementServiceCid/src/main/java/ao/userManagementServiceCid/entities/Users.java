package ao.userManagementServiceCid.entities;


import ao.userManagementServiceCid.enums.Role;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(catalog = "userManagementServiceCid" , schema = "public")
public class Users {

     @Id
     @GeneratedValue(strategy = GenerationType.AUTO)
     private UUID pk_user;
     private String username;
     private String email;
     private String password;
     private Role role;
     private LocalDateTime created_at;
     private LocalDateTime updated_at;

     //Getters and Setters

    public void setPk_user(UUID pk_user) {
        this.pk_user = pk_user;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public LocalDateTime getCreated_at() {
        return created_at;
    }

    public void setCreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }

    public LocalDateTime getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(LocalDateTime updated_at) {
        this.updated_at = updated_at;
    }
}
