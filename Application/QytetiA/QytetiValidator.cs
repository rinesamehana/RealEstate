using Domain;
using FluentValidation;

namespace Application.QytetiA
{
    public class QytetiValidator : AbstractValidator<Qyteti>
    {
        public QytetiValidator()
        {
            RuleFor(x => x.Emri).NotEmpty();
        }
    }
}