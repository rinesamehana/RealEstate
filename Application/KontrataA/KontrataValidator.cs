using Domain;
using FluentValidation;

namespace Application.KontrataA
{
    public class KontrataValidator : AbstractValidator<Kontrata>
    {
        public KontrataValidator()
        {
            RuleFor(x => x.LlojiKontrates).NotEmpty();
        }
    }
}