using Microsoft.Net.Http.Headers;

namespace Localnote;

public class Note
{
    public ValueTuple<double, double> coordinates;
    public string title = "placeholder";
    public string description = "example";
    public DateTime date;

    public Note((double, double) coordinates, string title, string description, DateTime date)
    {
        this.coordinates = coordinates;
        this.title = title;
        this.description = description;
        this.date = date;
    }

    public (double, double) GetCoordinates()
    {
        return coordinates;
    }

    public string GetTitle()
    {
        return title;
    }
    public string GetDescription()
    {
        return description;
    }
    public DateTime GetDateTime()
    {
        return date;
    }

    public void SetTitle(string new_title)
    {
        this.title = new_title;
    }
}