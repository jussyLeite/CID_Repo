package ao.userManagementServiceCid.entities;


import jakarta.persistence.*;

@Entity
@Table
public class Faculty {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer pk_faculty;
    private String  name;

    public Faculty() {
    }

    public Integer getPk_faculty() {
        return pk_faculty;
    }

    public void setPk_faculty(Integer pk_faculty) {
        this.pk_faculty = pk_faculty;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
