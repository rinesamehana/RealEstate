using Domain;
using FluentValidation;

namespace Application.PajisjaA
{
    public class PajisjaValidator : AbstractValidator<Pajisja>
    {
        public PajisjaValidator()
        {
            RuleFor(x => x.LlojiPajisjes).NotEmpty();
        }
    }
}