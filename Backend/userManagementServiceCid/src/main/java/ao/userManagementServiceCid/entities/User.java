package ao.userManagementServiceCid.entities;



import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(catalog = "userManagementServiceCid" , schema = "public")
public class User {
     @Id
     @GeneratedValue(strategy = GenerationType.AUTO)
     private Long pk_user;
     private String email;
     private String password;
     private LocalDateTime created_at;
     private LocalDateTime updated_at;
     private boolean isActive;
     private String url_profile_avatar;
     @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "users_roles",
        joinColumns = @JoinColumn(name = "pk_user"),
        inverseJoinColumns = @JoinColumn(name = "pk_role")
    )
    private Set<Role> roles = new HashSet<>();

     @JoinColumn(name = "fk_person", referencedColumnName = "pk_person")
     @ManyToOne
    private Person fk_person;

    public User() {
    }

    public Long getPk_user() {
        return pk_user;
    }

    public void setPk_user(Long pk_user) {
        this.pk_user = pk_user;
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

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public String getUrl_profile_avatar() {
        return url_profile_avatar;
    }

    public void setUrl_profile_avatar(String url_profile_avatar) {
        this.url_profile_avatar = url_profile_avatar;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public Person getFk_person() {
        return fk_person;
    }

    public void setFk_person(Person fk_person) {
        this.fk_person = fk_person;
    }
}
