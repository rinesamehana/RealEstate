using Domain;
using FluentValidation;

namespace Application.AmbientiA
{
    public class AmbientiValidator : AbstractValidator<Ambienti>
    {
        public AmbientiValidator()
        {
            RuleFor(x => x.LlojiAmbient).NotEmpty();
        }
    }
}