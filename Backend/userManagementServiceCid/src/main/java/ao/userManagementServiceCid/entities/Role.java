package ao.userManagementServiceCid.entities;


import ao.userManagementServiceCid.enums.UserRole;
import jakarta.persistence.*;


@Entity
@Table(catalog = "userManagementServiceCid" , schema = "public")
public class Role {

     @Id
     @GeneratedValue(strategy = GenerationType.AUTO)
    private Long pk_role ;
    private String description;

    public Long getPk_role() {
        return pk_role;
    }

    public void setPk_role(Long pk_role) {
        this.pk_role = pk_role;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
}
