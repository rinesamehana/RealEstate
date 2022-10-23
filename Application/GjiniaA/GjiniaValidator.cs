


using Domain;
using FluentValidation;

namespace Application.GjiniaA
{
    public class GjiniaValidator : AbstractValidator<Gjinia>
    {
        public GjiniaValidator()
        {
            RuleFor(x => x.Lloji).NotEmpty();
        }
    }
}