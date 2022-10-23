using Domain;
using FluentValidation;

namespace Application.StafiA
{
    public class StafiValidator : AbstractValidator<Stafi>
    {
        public StafiValidator()
        {
            RuleFor(x => x.Emri).NotEmpty();
        }
    }
}