package ao.userManagementServiceCid.entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer pk_student;
    private String matricula_id;
    @ManyToOne
    @JoinColumn(name = "fk_curso", referencedColumnName = "pk_curso")
    private  Curso  fk_curso;
    @ManyToOne
    @JoinColumn(name = "fk_person", referencedColumnName = "pk_person")
    private Person fk_person;
    private  Integer entry_year;
    private LocalDateTime create_at;
    private LocalDateTime update_at;

    public Student() {
    }

    public Integer getPk_student() {
        return pk_student;
    }

    public void setPk_student(Integer pk_student) {
        this.pk_student = pk_student;
    }

    public String getMatricula_id() {
        return matricula_id;
    }

    public void setMatricula_id(String matricula_id) {
        this.matricula_id = matricula_id;
    }

    public Curso getFk_curso() {
        return fk_curso;
    }

    public void setFk_curso(Curso fk_curso) {
        this.fk_curso = fk_curso;
    }

    public Integer getEntry_year() {
        return entry_year;
    }

    public void setEntry_year(Integer entry_year) {
        this.entry_year = entry_year;
    }

    public LocalDateTime getCreate_at() {
        return create_at;
    }

    public void setCreate_at(LocalDateTime create_at) {
        this.create_at = create_at;
    }

    public LocalDateTime getUpdate_at() {
        return update_at;
    }

    public void setUpdate_at(LocalDateTime update_at) {
        this.update_at = update_at;
    }
}
