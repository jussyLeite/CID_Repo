package ao.userManagementServiceCid.entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

//@Entity
//@Table
public class Professor {

   // @Id
   // @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer pk_professor;
    private String fk_department;
    private Integer fk_grau;
    private Integer fk_area_of_specialization;
    private Date contract_date;
    private LocalDateTime create_at;
    private LocalDateTime update_at;

    public Professor() {
    }



}
