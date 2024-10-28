package ao.userManagementServiceCid.services.implementation;

import ao.userManagementServiceCid.entities.Curso;
import ao.userManagementServiceCid.services.Interfaces.CursoService;

import java.util.List;
import java.util.Optional;

public class CursoServiceImpl implements CursoService {
    @Override
    public Optional createCoure(Curso course) {
        return Optional.empty();
    }

    @Override
    public Curso editCourse(Curso course) {
        return null;
    }

    @Override
    public Curso findCoursById(Object pk_course) {
        return null;
    }

    @Override
    public List findAllCourse() {
        return List.of();
    }

    @Override
    public void deleteCourse(Curso course) {

    }
}
