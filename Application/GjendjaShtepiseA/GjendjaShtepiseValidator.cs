using Domain;
using FluentValidation;

namespace Application.GjendjaShtepiseA
{
    public class GjendjaShtepiseValidator : AbstractValidator<GjendjaShtepise>
    {
        public GjendjaShtepiseValidator()
        {
            RuleFor(x => x.Gjendja).NotEmpty();
        }
    }
}