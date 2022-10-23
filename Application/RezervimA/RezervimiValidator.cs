


using Domain;
using FluentValidation;

namespace Application.RezervimA
{
    public class RezervimiValidator : AbstractValidator<Rezervimi>
    {
        public RezervimiValidator()
        {
            RuleFor(x => x.Emri).NotEmpty();
            RuleFor(x => x.Mbiemri).NotEmpty();
        
            RuleFor(x => x.NrTelefonit).NotEmpty();
            RuleFor(x => x.Check_in).NotEmpty();
            RuleFor(x => x.Check_out).NotEmpty();
       
        }
    }
}