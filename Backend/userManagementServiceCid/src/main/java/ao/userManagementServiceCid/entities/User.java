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
     private String name;
     private String username;
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
}
