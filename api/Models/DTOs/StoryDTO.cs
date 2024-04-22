namespace B.Banter.Models.DTOs;

public class StoryDTO
{
    public int Id { get; set; }

    public int pirateId { get; set; }

    public string title { get; set; }

    public string content { get; set; }

    public DateTime date { get; set; }
}