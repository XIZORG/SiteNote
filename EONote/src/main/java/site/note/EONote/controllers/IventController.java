package site.note.EONote.controllers;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import site.note.EONote.Models.Ivent;
import site.note.EONote.repositories.IventRepositories;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/ivent")
public class IventController {
    private final IventRepositories iventRepositories;

    @Autowired
    public IventController(IventRepositories iventRepositories) {
        this.iventRepositories = iventRepositories;
    }

    @RequestMapping("/setNewIvent")
    public String setIvent(@RequestBody String reqStr) throws Exception{
        JSONObject answer = new JSONObject();
        try {
            JSONObject body = new JSONObject(reqStr);
            Ivent newIvent = new Ivent(body.getLong("user_id"), body.getInt("day"),
                    body.getInt("month"), body.getInt("year"), body.getString("descriptionOfEvent"));
            iventRepositories.save(newIvent);
        } catch (JSONException ex){
            answer.put("success", false);
            return answer.toString();
        }
        answer.put("success", true);
        return answer.toString();
    }

    @GetMapping("/getNearIvents")
    public List<Ivent> getNearIvents(){
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        String dataStr = dtf.format(now);
        int day = Integer.parseInt(dataStr.substring(8, 10));
        int month = Integer.parseInt(dataStr.substring(5, 7));
        System.out.println(day + "  " + month);
        return iventRepositories.findTop7ByDayAfterOrMonthAfter(day, month);
    }
}
