using Domain;
using FluentValidation;

namespace Application.ShtetiA
{
    public class ShtetiValidator : AbstractValidator<Shteti>
    {
        public ShtetiValidator()
        {
            RuleFor(x => x.Emri).NotEmpty();
        }
    }
}