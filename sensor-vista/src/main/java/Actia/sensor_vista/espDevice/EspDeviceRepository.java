package Actia.sensor_vista.espDevice;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EspDeviceRepository extends JpaRepository<EspDevice, Integer> {
    @Query("""
                SELECT espDevice
                FROM EspDevice espDevice
                WHERE espDevice.espGroup.id = :espGroupId
""")
    Page<EspDevice> findAllByEspGroupId(Integer espGroupId, Pageable pageable);
}
