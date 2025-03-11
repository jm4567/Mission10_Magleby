using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Mission10_Bowl.Models;

namespace Mission10_Bowl.Controllers;

[Route("/api/[controller]")]
[ApiController]

public class BowlingLeagueController : ControllerBase
{
    private BowlingLeagueContext _bowlContext;
    
    public BowlingLeagueController(BowlingLeagueContext temp)
    {
        _bowlContext = temp;
    }
    
    [HttpGet(Name = "GetBowlers")]
    public object Get()
    {
        var bowlerList = _bowlContext.Bowlers
            .Include(b => b.Team)
            .Select(b => new 
            {
                b.BowlerId,
                b.BowlerFirstName,
                b.BowlerMiddleInit,
                b.BowlerLastName,
                TeamName = b.Team.TeamName,
                b.BowlerAddress,
                b.BowlerCity,
                b.BowlerState,
                b.BowlerZip,
                b.BowlerPhoneNumber
            }) 
            .Where(b => b.TeamName == "Marlins" || b.TeamName == "Sharks")
            .ToList();

        return bowlerList;
    }

}
