using Domain;
using FluentValidation;

namespace Application.MenyraPagesesA
{
    public class MenyraPagesesValidator : AbstractValidator<MenyraPageses>
    {
        public MenyraPagesesValidator()
        {
            RuleFor(x => x.MenyraePageses).NotEmpty();
        }
    }
}