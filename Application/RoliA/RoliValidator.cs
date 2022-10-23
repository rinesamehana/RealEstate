using Domain;
using FluentValidation;

namespace Application.RoliA
{
    public class RoliValidator : AbstractValidator<RoliUser>
    {
        public RoliValidator()
        {
            RuleFor(x => x.Roli).NotEmpty();
        }
    }
}