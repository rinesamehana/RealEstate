using Domain;
using FluentValidation;

namespace Application.LlojiUserA
{
    public class LlojiUserValidator : AbstractValidator<LlojiUser>
    {
        public LlojiUserValidator()
        {
            RuleFor(x => x.Lloji).NotEmpty();
        }
    }
}