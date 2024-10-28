package ao.userManagementServiceCid.services.Interfaces;

import ao.userManagementServiceCid.entities.Curso;

import java.util.List;
import java.util.Optional;

public interface CursoService<Obj extends Curso, T> {

    Optional<Obj> createCoure(Obj course);
    Obj editCourse(Obj course);
    Obj findCoursById(T pk_course);
    List<Obj> findAllCourse();
    void deleteCourse(Obj course);
}
