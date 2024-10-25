package Actia.sensor_vista.instance;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

public interface InstanceRepository extends JpaRepository<Instance, Integer>, JpaSpecificationExecutor<Instance> {
    @Query("""
            SELECT instance
            FROM Instance instance
            WHERE instance.archived = false
            AND instance.owner.id != :userId
""")
    Page<Instance> findAllDisplayableInstances(Pageable pageable, Integer userId);
}
