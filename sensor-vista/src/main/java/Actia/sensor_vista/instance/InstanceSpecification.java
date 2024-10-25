package Actia.sensor_vista.instance;

import org.springframework.data.jpa.domain.Specification;

public class InstanceSpecification {
    public static Specification<Instance> withOwnerId(Integer ownerId) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("owner").get("id"), ownerId);
    }
}
