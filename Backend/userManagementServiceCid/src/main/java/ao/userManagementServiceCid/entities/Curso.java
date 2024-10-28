package ao.userManagementServiceCid.entities;


import jakarta.persistence.*;

@Entity
@Table
public class Curso {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer pk_curso;
    private String name;
    @ManyToOne
    @JoinColumn(name = "fk_faculty", referencedColumnName = "pk_faculty")
    private Faculty pk_faculty;

    public Curso() {
    }

    public Integer getPk_curso() {
        return pk_curso;
    }

    public void setPk_curso(Integer pk_curso) {
        this.pk_curso = pk_curso;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
