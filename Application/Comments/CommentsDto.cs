using System;
using Domain;

namespace Application.Comments
{
    public class CommentsDto
    {
        
    public int Id{get;set;}
    public string Body{get;set;}
    public DateTime CreatedAt{get;set;} = DateTime.UtcNow;

      public string UserName{get;set;}
    public string DisplayName{get;set;}

    public string Image{get;set;}


    
}
    }
