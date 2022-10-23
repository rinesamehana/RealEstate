using Domain;
using FluentValidation;

namespace Application.KafshetA
{
    public class KafshetValidator : AbstractValidator<Kafshet>
    {
        public KafshetValidator()
        {
            RuleFor(x => x.LejohenKafshet).NotEmpty();
        }
    }
}