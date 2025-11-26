package JoyeriaElegance.demo.Entities;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
public class RequestLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String method;
    private String path;
    private String ip;
    private LocalDateTime timestamp;

    public RequestLog() {}

    public RequestLog(String method, String path, String ip, LocalDateTime timestamp){
        this.method = method;
        this.path = path;
        this.ip = ip;
        this.timestamp = timestamp;
    }

    public Integer getId() { return id;}
    public void setId(Integer id) { this.id = id; } 

    public String getMethod() { return method;}
    public void setMethod(String method) { this.method = method; } 

    public String getPath() { return path;}
    public void setPath(String path) { this.path = path; } 

    public String getIp() { return ip;}
    public void setIp(String ip) { this.ip = ip; } 

    public LocalDateTime getTimestamp() { return timestamp;}
    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; } 

}