package ao.userManagementServiceCid.entities;

import jakarta.persistence.*;

import java.util.Date;


/*
* Person entity
* */

@Entity
@Table
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer pk_person;
    private Integer full_name;
    private Date datebirth;
    private String address;
    private String celphone;

    public Person() {
    }

    public Integer getPk_person() {
        return pk_person;
    }

    public void setPk_person(Integer pk_person) {
        this.pk_person = pk_person;
    }

    public Integer getFull_name() {
        return full_name;
    }

    public void setFull_name(Integer full_name) {
        this.full_name = full_name;
    }

    public Date getDatebirth() {
        return datebirth;
    }

    public void setDatebirth(Date datebirth) {
        this.datebirth = datebirth;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCelphone() {
        return celphone;
    }

    public void setCelphone(String celphone) {
        this.celphone = celphone;
    }
}
