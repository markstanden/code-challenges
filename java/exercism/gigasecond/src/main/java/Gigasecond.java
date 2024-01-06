import java.time.LocalDate;
import java.time.LocalDateTime;

public class Gigasecond
{
	private LocalDateTime date;


	public Gigasecond(LocalDate moment)
	{
		this(moment.atStartOfDay());
	}


	public Gigasecond(LocalDateTime moment)
	{
		date = moment.plusSeconds((long) 1e9);
	}


	public LocalDateTime getDateTime()
	{
		return date;
	}
}