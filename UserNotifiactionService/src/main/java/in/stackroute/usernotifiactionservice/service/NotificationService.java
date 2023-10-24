package in.stackroute.usernotifiactionservice.service;

import in.stackroute.usernotifiactionservice.model.Notification;

import java.util.List;

public interface NotificationService {
    List<Notification> getall();

    Notification getNotify(int id);

    Notification saveNotify(Notification notification);

    Notification updatenotify(Notification notification);

    void deleteById(int id);

    boolean existsById(int id);
}