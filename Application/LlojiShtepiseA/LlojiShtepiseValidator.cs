using Domain;
using FluentValidation;

namespace Application.LlojiShtepiseA
{
    public class LlojiShtepiseValidator : AbstractValidator<LlojiShtepise>
    {
        public LlojiShtepiseValidator()
        {
            RuleFor(x => x.LlojiiShtepise).NotEmpty();
        }
    }
}