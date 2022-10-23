using Domain;
using FluentValidation;

namespace Application.KohaEPunesA
{
    public class KohaEPunesValidator : AbstractValidator<KohaEPunes>
    {
        public KohaEPunesValidator()
        {
            RuleFor(x => x.KohaEPuness).NotEmpty();
        }
    }
}