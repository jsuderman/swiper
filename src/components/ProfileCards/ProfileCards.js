import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./ProfileCards.css"


function ProfileCards() {

    const [people, setPeople] = useState([
        {
            name: 'Michael Jordan',
            url: "https://media.gettyimages.com/photos/jan-1998-guard-michael-jordan-of-the-chicago-bulls-in-action-against-picture-id329764?k=6&m=329764&s=612x612&w=0&h=VWelXPy8szmkL5sSMIJGy_E7YfiyyRih78CwqCfJBqk="
        },
        {
            name: 'Tiger Woods',
            url: "https://media.gettyimages.com/photos/tiger-woods-of-the-united-states-celebrates-after-sinking-his-putt-on-picture-id1142670606?k=6&m=1142670606&s=612x612&w=0&h=Zc8x4_VmWZj5q4BslIoOETSPSfnOrnCdh8m6k0acNoM="
        },
        {
            name: 'Jerry Rice',
            url: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAwJCRcVEhcXFhcXFRUXGBgdHRgWFx0YHR0YIR0lJSAeIB8mLT0xKCk4Kh8gMkkzOD5AREVFJTBMUktCUj1DRUEBDQ4OExETJRUVJUEtLSdBQUVBQUFCQUFBQUFBQkFBRUFBQUFBQU1CQUFBQUFBQUFBQUFBQUFBQUJBQUFBQUVBQf/AABEIALEBHAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xABFEAACAQIDBAcEBwQHCQAAAAABAgADEQQSIQUTMUEGIlFhcYGRMlKhsRQjQnLB0fAzYrLhBxY0NVOCwhUkQ3N0kpPE8f/EABoBAAMBAQEBAAAAAAAAAAAAAAECAwAEBQb/xAAsEQACAgEEAQMCBQUAAAAAAAAAAQIRAwQSITFBIjNREzIFQmFx8JGhscHx/9oADAMBAAIRAxEAPwDyyKPaKOAaKKKAwo0eOBNRhrR4rR7RqMNaKFFDQAbRoUYwNGGiiiihFFFHtMYaK0NaZM6fYXQLGYwBgm6p/wCJVuoPgOJgs1nK2itPRMZ/RPiUS9KrSrPzTVD5E6fKctj+imNw/wC1w1VR2hcw9VuJgWYcUkamQdRaDaYNjRoUaYw0UeKYw0Vo8e0KRgbRQrRrTUawYoVo0FBGijxQGGiiimMSxjDtFaOaiOKGRGtMAGOIrRwIUAUUcCEFjgAtFJMsa0NGAgmGRBiMIMeK0e0QIgJ1/RXoJWx31jfU4e/7Rhq33Bz8eEh6C9HxjcaFf9lTGdx2gHRfM2+M9b6UbZGCwwWlZaj9WmABZVHFrdwsPEiL2FJt0gcLsPZ+zaStkRSLDe1BnqMx7P5SDG9NsOFfKHcr7OllZuQuNROWrUzWo0qj4lGqHeE02Yl8zEAaAaaKONuMqDY9ZhTK0GCsS3VGlxy+MZJHbDTR2vc+ejqcF0gZ1qvRwtO1NBnJqZeqLkC5484GD6b0mVd4KlBjxyMHW5IJ0bw+Myqmx3GDdPojtiGa4qB1IVdOQOul+XOc/isJWo/tKLKp0BqIQLjsPpDQ6w4ZTa8cJfzk9D2psLA7QCtUVGd1utWiwWpb7vPzB4GcNtr+i6tTVnwrjEIL9S2Wpp2DgT6RHCJTFLEYesbdXeZgBUovwJy+7roRPQ+i+0K9WkRXGa1ilddUqIe/tFtQdYH+hxzwqK3Jnz5UplSQQQQSCDoQYBnef0pbLFHHioostdAxt/iA2b/SfOcGZiKGjxo8wR7R4oo6FFGjxQhGtBhRjFaMNFHii0EG0UK0fLNRiUiKSukjyzMpQMYiTKkLdQ0CiuBFaTbuLdwpAoALCAhZYrR0xdoJgmHaCVgs21kZgkSXJEVi9hoijx7S3g1UZqjDMEtZTwLngD3aE+UDQYq3R3HQja1LZ+CrVqhUVatRQisDdqSjUjuNz5iZ+3unAxFZnWkOAVd518qjWwHAa63nIYjFNUYsxuTBRRbM18vIDi35DviB30/R/U0X27iHNg5BPJBb4CQvXrH2nI+/UA+BN5TfEkiw6i+6unqeJ85CJrM5zl22XxVqf4q/+SWae08Ug6tVyOeV848wDMi0bhNbNukumzoP6zPUYGuq1jYLmIs1gLWuO6eg9BOleESmaDO1NmcsN57IuALA8uE8j31/a1/e+1/Pzjm6210PAiaxnlk1tfKPYv6VcEKmBp1hqaVUaj3HFvmFnjJE7LB9JXrbKxGDqHPlCMhPJQwuPkfWcq9OOkTca5+StaOJIacHLMAaPHtHyx0KBFCKxrTGGjR40zMK0QihCAI0eK0eAJpNRgbiaooQHw8aitlFaUkFKWVoQ93MjMpGjB3E0BTiKQ0KZjUZGUmpupHUoRWUSM4JDFKW1w8PcxQ0U91BalLppwSkpFE2jNenHRfq6i9wb0/+y6aUlwOEDVqak5VZ1Ut2KxsfgY0laAuGYKjt4CMzFjf9Adk0tpbPCV6lOncrTYrc8Se+V6WBdjYC3eZy2bayCnRJ4TRobHci50kVTDPSNwQ3bbWaOA2mzdU8YrY8YoiqbEa2nxMpVdmuvG3rNvH4kov4GY/02pUNlA85hpJIpPRIgjTQ8D+ry9WpuPbGnaJZo4FWW41EZck3Eg2RSJdwBf6qofIC94W7nRdEMirj6TgH/dnZSRqLa6HlewmMEjrgaPKr4KTUpE1OaRpyBqUIXAo5I9paNKRtTmTEcCCNaHkjWj2TcSIiDJGWBaK2ahoQEQWGBMFIG0e0ICFaAokdWF0glZY3cjZJ0E0AKcBqcmWIrBQ1lfJHKSbLERAxkiBUh7q8kVJIBFSKEAowWoy4FiKzUAzWpSM0pfZIBpzIzRT3UtYbDpcF6qUTfql76sNeURSVNoYYugtxQ38jx/CGTaXAu0s1KQbE4hhYq9TMDx4i5+Mzsbg6itl0C8cx7+cs7NYKrnsJ+Amvs7aAxAyZF0B1bU+U5UnLoZtR7OSOF161UHjax58pbwOEbeqOPC5A5d83KmDKksVSmvblFz4TR2fgXqL9XlS2pLWF++8E012bHtk+Dl9tYVla4QZSezSUxg2NMkMM9xYC3s879nKdhjsE3BrMRyBGs52thTc2pobHgRczRVhyJIz0SqNNGvyB/CauCpFVa+l+RgUKmVTamqnttJcKW6xaVUGuWS3rpEWExApVqpN8tSi9M24gtbl6xyaba0i9gbEOBcdhuOUgxNlq6i4fUH5iHgqOVT3k+g0EVy5otCJKEgNTlm0bLBZVxKRpwTQvL4pQxQjIk0ZhwshfDGbow8X0SUSsm+DnGw5gnDmdIcDI3wdoXEVM53cmMUm4+FlGth7RGiqRRAjwmSDFs1HagQXWGDGadFkVEjVIikNYLmax1EHLAyw80ZYrZSMRrR1MTQQZhqJ4rQVaFCLQBEErJbRyJgFcJEVtJgIisVsNFGrhRTBI4VMxt2SLBMlI5lGvnLWLTqA9hmWW1nNJNdBVXydEF+kEZvYXj+UxcTi6tCq12Z0PsnmB2SzQx4UBS4VbXOv6vIa20cOG+29+yy69t9YKtcmTroysVjnrWszD8fOaWEqGmAe1etrxPbK1fGULhQjMBzza+loIq0yDlZj+6w1H60jJKhW3dl6pjg3IekEVrgzLII17dZbwhhV3yBtBDD7w3v7B4cz2iWSReBcqCoJyli1idLnifgPSADAzqxwpck146iRrJkECHkToslVYCSZZaJzyCRJYWlGpLLCiWic8yA05Xq05fIkDrGZOJmPTlSvTmpUEpVRJtF0zFrU5VImliFlArJNBs7EQskdFllUlbBVFQpInEuOJA4isdFUiIGSlJGUi2OhEwRHiAjWZoIQrx1pmEaRhsUFTCJglbRAwWCglWSKkSyQQpGIcXQvSbuF/Sc3fiewTrwND4GcfjaZRmI9k38jJzSEIcLWsS9ka32XAImovSsBCr0abf5QZz6EC97nwl+jiaJUru1DW0NrmTaNCbXCJKvSC991Sp0h+6oEpVtoO4OY69wtGrMiaFQfAymx4W4d8KQJzbNKm91HhLeD1aZRq2mlssaw+TRNFlkZSWd3eFuItHYpFRRLFOPuDJaeHMxmwkEmUR6dCWFoSqJNg0zLCyHdESZBKohIcyCpLVpXqCMyaRTqCU6k1aWCeobAec0afRzTraxGw34OJryky6z0Vujie7B/qqD9kekmyu1ldMPDNKXVURyk6NpPeZbpIjTmo9CAKEk0WTRnjDwKmGmtuoD0ojQyZiNRMNKM1Po8vYHYlSqLovV95tF9ecVBlJJGMlOHkm82wFBscRQDe7muZZ/qhU5VE9DHUkS3x+TlWoSFqNpuY3BChUamzgstr5Qbai9tZUYKefwjcFo4ckluSMzhCB0udBLGJVUALEa8ANSZg7SxRKseCqDpFlNRRbHppSty4SNFds0blQ12OmgPGY+K5/rymZsts1VQBzJJ8JrunGScm+zmlt/Kc1XplWNpBmN785v18DoTMWtRKnUQEJRIiSeMIRpIohFSCprczc2bYG5IA5kzIpLNXB01bqtfKwINuNu6NEouOToqNEEaa+EtLhdJzlalXwRXMSaba03vcMvf2HunQ7H2utaytZWPA8jCqumdW3dDfB2Srg4f0a0091G3cptRzfUMo0JIlOaYw1+Av4C8BqNpqNvKe7iyWlrdyN0jikRWWMHs41Drwg4agXa06zA4QKo0iylRORFhtmqo0EnNDkJac2Eko0eZkHIpFKKsr0sEJZFAdksBIrQCSm2eerLCLIBLSGdzYrQJWR5ZZIkZWIxosgIkdZso4EkmwA4k9kLE1QguZo9F8TQCtXrPTWpnKrnYAhLDgPxkZOjp4jHdL/pDRwG6CviVJd77vDU9Wbvc9ndNVdl18SQa7bmiOFCnpp2GPtLphhKAuHFZ7aLTsfVuAnJ47phi6+lO2Hpn3fat94/haT5ZGO7I/SrZ020du4PZ/1aIHrD7FMC4+83LwnMYvpXiKzm7GmnJKZt6niZgKgUk3JOpLHUk85CH6pPMmBnq6fRKPqycs2jiA2pOp5nmZG9S2spM8HenxENnobUuhsdVJe/aomXilzIR2iX2fMLcxw/KVWEnILVxofBBV0HuKPhc/Ey4ElOmvssOA6p7jyPn+EuKYZS5Pn1Db6X4K+IMy3pA3v3zUxAmJicQwuBAmBor1UAMNFvpIhqdeMvUaVhGsShLStNLZmHLvw6q+1+UfD7OZtT1V7+J8BN3CUQij7Kjhzv8AnOjFjbdslkmkqRZ22FfBsrC9hmHcQNLTlMEPZtx5WnQY2t9U3AZlKqL8e/wmRRsneYuetyPS/DIPa5Po30xblRdibDiTJ8Li1FVTVDmlfrZLZj3WPKc+cW/bbwg75veMnvPSlhjKLj1Z7PgNo0a6A0XVh2DQjuK8RKzYLENWu7Yd6N/ZNI5svYDfjPIg5v39vP1ltNp1wuUVqwX3RVa3zgs8uX4dO/Sz1itsigRcoFtrcEic/QOCxTlKFYrU1srA6+F+Mzej3TXdhaOIBKLoKouSo5BxzHfOgp9FsK2ITE0iQLh8qMN2zcmH8oVJnDkxyxyqRWGHGEYGsLKxsKg1W/K/MTcQjLcEEW0I5w9p0qb4eotYgUyhzE8h2+U896I9IeucK7XUn6tj48O68N3YIJN0d/QTMbnhLwECilhaSREjSlbFGjwYRDgislQx6ggZp2Mp2iTPIq+ICLc+Q7TAZ5h47GXqHXQaDu7ZKcqR0abT/Unz0gcVic7MSdACPP8AlM56QsOsSSPDSG5zXC68vMmQq3WPdp6SO5+D2pYMcq3K6JKVFV14t38pIz2vAU31jXgbGjjjBVFUBVbQ+kGmNB43gE5j4fOLPYH0ilB892MkIlejLBMxkQVF5jjGZbi485JIs2Vu4zGJcFXFN7sAyMLMCLgiaz7NpMAadQqDwzgkeGYTEe19JPhNo1KPskFfcYXU+UMWupHBqdK8j343T/yW8Rsaow6rU2P3wPnMmp0ZxBNzu1Haain5TssFjcJiFuwFOpzUm2vceYkww+EBuGU25DX5S0ccHyjw8k8kHtkqZx+H6NIpG8qmofdoof4j+U0aeByWyUrEc2GY+pnRDHUVNlAA95hkA/7rfIzHx+3usVpZWHvWNv5xvREbHjzZXSQG7K3L2vzv+chxOOAHvHsGg8z+vwmXXxbMesxJ7OAHgIKd8WWd9RPSwfh0U7yO/wBCStWZzdjcn5QFEYw1EgeskkqQgI8IISLgEgc7aCX9n7FrYj2F6o4u3VQeLGYEpKKtsz4QnVYbY9CjUpIwOJrVmAW6stDjqb8Xt3aTO6RbFOGqZkBFJybfuNzQ/geYmaohDUQlLb8mFez+Imts/bmIw4tSqsi3vkIDLfuBHymO51B7DJpkVnjjNVJWbe2OkuJxdDctu1BIJKAqWA4AjWYuGo7sfvcSYg2Xjw+MffXGik/CNfFEYaXFjluiuT1Povtr6TRysfradg3eOTTenjmx9q1MNXWoB1RxUakqeInrNPFhkDDgQCPAiazyNZh+nO10ydmtK7YkAyDFYqwmJUxushKfJzKNmfVqSu1SBWeVWqTtcjpjAlxGIyox7FJnN1XuBY30mtXe6sO0Gcu1xwNuXmJGUj09L6YstM1vCJXsJUNYlfgfwhUsRca/q3KTs6lNWXjWPpGepfzlcVgbx6lXqluQHOGx7VElM6eMdl+yOXHxkNKpcDLctwHLWSfSqdLqswv6zIVzilbfBLTp2hFDATH0j9sSUYmn76+ojUBZYeGgd2eyR1qdxLH0hPfX1EjqV05Mp8xNRvqRfkoIh4Q3X1llqdxcXHwkDUTyi0K+DqOj+Gy4JqmUlnrHUIHbJTAvl58XvpyUzocRQqVFCFgpvlGVjTzHPk0Ot9b+k4rZW28RhrBHG7BuabC6tfjcflNCt0lrMbotOkALCyZmUa8Ha55n1lYzpUeZl0uTJkcv73/ox8bRTf1cl92HYLmNyVB0uZWqX4AaSV2t4xKB2gydHqeKK6Uu4yTdN2SyAIdpqGVIqhO6GEk5I7QPOWtmCk1emKhG7LgMQeUNGlJJWdX0cpLh8EGbNesc7BVDkoGyoApFtSeJ75OcXSfNmrIymwFHFUmo00HMAr1b2562kdV6VepSaoCKi5l+jHNRZaZtbdnTORbkTe5tyhLhaJrsqV2VFp5mSq+9Fy1gMtS7KBlJNiDqJKWSmfPyk5ycvknw1N6YWriDvkon6tqTq4C2KhmLEEmxtYDXvMvbUwyVaRWqc29vanls2UC+g5svH1HOctiqCvgDi6NKmqgkvTrKSGytbOjXDd9iTKWx9t1qtTd0aj0axBKo772i5GuXrdZD5kQ7r9S8BUW/UvBgbRwTUKrU24jUEcGU6qw7iJCHAFzynQdIKhfC4epVQLX39ZLKLZUX2kI+9qPHsnMHig77+QjHs4crnC2S0ahZ7ntMtIbzPpvwNuJllKxtGTLRfBbHGdRgduHKqHkoE441DL2z8M9RwEOvPwh7OTXY1LHfwdm+PuOMpO1zJsPsSoACTfwEs/7HfvknjbZ4qnFGRVlR4op0yOqJVec7W5/fiikGejp+mQe/I0/1mKKIM+ydOf65wsT+wbxEUUJT8rLOB9hfAy10V/tr/db5iNFC/tZxa724l7bv5zm3iijY+jyH2RRzxHlFFLGj9yNt/wApGY0UifT+AJYHAxooQIgxHPwPymInKKKZHm677kTrGiijHIuhjLuzPbf/ACxRQPofS+8jv9uf3RQ/5bfxrAP9jw/ivzEUUlLslLt/zybXS7+7qvhT/iE8+6M/2/D/AHxFFEx+3M6cPtyNzphwqf8AW/8ArU5xv/E/yn+GKKPHpfsdel9pfuJOXgfkZMkeKOjsiGZ0XRP9s33fxiijrshq/akei0PZElMUUo+z5o//2Q=='
        }
    ])

    const swiped = (direction, nametoDelete) => {
        console.log("removing" + nametoDelete);
    };


    const outOfFrame = (name) => {
        console.log(name + "left the screen");
    }

    return (
        <div className="profileCards">
            <div className="profileCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(direction) => swiped(direction, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div
                        style={{ backgroundImage: `url(${person.url})` }}
                        className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                    
                ))}
            </div>

        </div>
    )
}

export default ProfileCards
