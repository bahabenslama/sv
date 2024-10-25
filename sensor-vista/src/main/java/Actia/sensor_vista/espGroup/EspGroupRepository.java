package Actia.sensor_vista.espGroup;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EspGroupRepository extends JpaRepository<EspGroup, Integer> {
    @Query("""
            SELECT espGroup
            FROM EspGroup espGroup
            WHERE espGroup.instance.id = :instanceId
""")
    Page<EspGroup> findAllByInstanceId(Integer instanceId, Pageable pageable);
}
