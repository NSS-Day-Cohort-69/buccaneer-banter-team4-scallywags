namespace B.Banter.Models;

public class Story
{
    public int Id { get; set; }

    public int pirateId { get; set; }

    public string title { get; set; }

    public string content { get; set; }

    public DateTime date { get; set; }
}