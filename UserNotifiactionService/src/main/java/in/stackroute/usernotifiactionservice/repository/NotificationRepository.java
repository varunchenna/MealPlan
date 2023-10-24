package in.stackroute.usernotifiactionservice.repository;

import in.stackroute.usernotifiactionservice.model.Notification;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotificationRepository extends JpaRepository<Notification, Integer> {
}
