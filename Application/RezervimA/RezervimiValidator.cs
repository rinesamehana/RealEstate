


using Domain;
using FluentValidation;

namespace Application.RezervimA
{
    public class RezervimiValidator : AbstractValidator<Rezervimi>
    {
        public RezervimiValidator()
        {
            RuleFor(x => x.Check_in).NotEmpty();
            RuleFor(x => x.Check_out).NotEmpty();
            RuleFor(x => x.ShtepiaId).NotEmpty();
            RuleFor(x => x.MenyraPagesesId).NotEmpty();
            RuleFor(x => x.KontrataId).NotEmpty();
       
        }
    }
}