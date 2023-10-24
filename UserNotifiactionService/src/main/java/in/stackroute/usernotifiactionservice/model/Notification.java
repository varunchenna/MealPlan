package in.stackroute.usernotifiactionservice.model;

import jakarta.persistence.*;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name="notification")
public class Notification {

    @Id
    @GeneratedValue( strategy = GenerationType.TABLE)
    private int id;

    @Column( nullable = false )
    private String title;

    @Column(  nullable = false )
    private String body;

    @Column(  nullable = false )
    private String Breakfast;

    @Column(  nullable = false )
    private String Lunch;

    @Column(  nullable = false )
    private String Dinner;

    public Notification(String title, String body, String Breakfast, String Lunch, String Dinner){
        this.title = title;
        this.body = body;
        this.Breakfast = Breakfast;
        this.Lunch = Lunch;
        this.Dinner = Dinner;
    }
}
