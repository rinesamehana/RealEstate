using Domain;
using FluentValidation;

namespace Application.PamjaA
{
    public class PamjaValidator : AbstractValidator<Pamja>
    {
        public PamjaValidator()
        {
            RuleFor(x => x.Pamjaa).NotEmpty();
        }
    }
}