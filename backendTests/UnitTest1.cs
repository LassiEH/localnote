using Localnote;

namespace backendTests;

public class Tests
{
    private Note _testNote = null!;
    [SetUp]
    public void Setup()
    {
        _testNote = new Note((1, 1), "test", "test", DateTime.Now);
    }

    [Test]
    public void Test1()
    {
        Assert.That(_testNote.title, Is.EqualTo("test"));
        Assert.Pass();
    }
}