import java.util.stream.IntStream;

public class Hamming
{
	private final String leftStrand;
	private final String rightStrand;


	public Hamming(String leftStrand, String rightStrand)
	{
	if(leftStrand == "" && rightStrand != "") {
			throw new IllegalArgumentException("left strand must not be empty.");
		}
		if(rightStrand == "" && leftStrand != "") {
			throw new IllegalArgumentException("right strand must not be empty.");
		}
		if(leftStrand.length() != rightStrand.length()) {
			throw new IllegalArgumentException("leftStrand and rightStrand must be of equal length.");
		}
		this.leftStrand = leftStrand;
		this.rightStrand = rightStrand;
	}


	public long getHammingDistance()
	{
		return IntStream.range(0, leftStrand.length())
		                .filter(x -> leftStrand.charAt(x) != rightStrand.charAt(x))
		                .count();
	}
}