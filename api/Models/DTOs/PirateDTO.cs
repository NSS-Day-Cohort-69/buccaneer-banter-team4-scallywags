namespace B.Banter.Models.DTOs;

public class PirateDTO
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int? Age { get; set; }
    public string? Nationality { get; set; }
    public string Rank { get; set; }
    public string Ship { get; set; }
    public string? Image_Url { get; set; }
}