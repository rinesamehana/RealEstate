using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Application.Profiles;
using Domain;

namespace Application.RezervimA
{
    public class AttendeeDto
    {
        public string Username{get;set;}

        public string DisplayName{get;set;}

        public string Bio {get; set;}

        public string Image{get;set;}
    }
}