using Domain;
using FluentValidation;

namespace Application.LagjjaA
{
    public class LagjjaValidator : AbstractValidator<Lagjja>
    {
        public LagjjaValidator()
        {
            RuleFor(x => x.Emri).NotEmpty();
       
        }
    }
}