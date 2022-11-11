import { Link } from "react-router-dom"

const Footer = () => {
  return (
    // <!-- Footer -->
    <footer class="bg-veryDarkBlue">
        {/* <!-- Flex Container --> */}
        <div
            class="container mx-auto flex flex-col-reverse justify-between space-y-8 px-6 py-10 md:flex-row md:space-y-0"
        >
            {/* <!-- Logo and siocail Links container --> */}
            <div
                class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:items-start md:space-y-0"
            >
                <div class="mx-auto my-6 text-center text-white md:hidden">
                    Copyright &copy; 2022, All Rights Reserved
                </div>
                {/* <!-- Logo --> */}
                <div className="flex space-x-4 items-center">
                <img src="/logo/Burgeon_white.svg" alt="Burgeon Logo" className="max-h-10" />
                <h1 className="text-2xl text-white font-medium">BURGEON</h1>
                </div>

                {/* <!-- social Links container --> */}
                <div class="flex justify-center space-x-4">
                    {/* <!-- Link1 --> */}
                    <Link href="">
                        <img
                            src="images/icon-facebook.svg"
                            alt=""
                            class="h-8"
                        />
                    </Link>
                    {/* <!-- Link2 --> */}
                    <Link href="">
                        <img
                            src="images/icon-youtube.svg"
                            alt=""
                            class="h-8"
                        />
                    </Link>
                    {/* <!-- Link3 --> */}
                    <Link href="">
                        <img
                            src="images/icon-twitter.svg"
                            alt=""
                            class="h-8"
                        />
                    </Link>
                    {/* <!-- Link4 --> */}
                    <Link href="">
                        <img
                            src="images/icon-pinterest.svg"
                            alt=""
                            class="h-8"
                        />
                    </Link>
                    {/* <!-- Link5 --> */}
                    <Link href="">
                        <img
                            src="images/icon-instagram.svg"
                            alt=""
                            class="h-8"
                        />
                    </Link>
                </div>
            </div>

            {/* <!-- List Container --> */}
            <div class="flex justify-around space-x-32">
                <div class="flex flex-col space-y-3 text-white">
                    <Link href="#" class="hover:text-brightRed">Home</Link>
                    <Link href="#" class="hover:text-brightRed">About</Link>
                    <Link href="#" class="hover:text-brightRed">Our Teams</Link>
                    <Link href="#" class="hover:text-brightRed">My Customers</Link>
                </div>
                <div class="flex flex-col space-y-3 text-white">
                    <Link href="#" class="hover:text-brightRed">Careers</Link>
                    <Link href="#" class="hover:text-brightRed">Community</Link>
                    <Link href="#" class="hover:text-brightRed"
                        >Privacy Policy</Link
                    >
                </div>
            </div>
            {/* <!-- Input Container --> */}
            <div class="flex flex-col justify-between">
                <form>
                    <div class="flex space-x-3">
                        <input
                            type="text"
                            class="flex-1 rounded-full px-4 focus:outline-none"
                            placeholder="Updated in your inbox"
                        />
                        <button
                            class="rounded-full bg-brightRed px-6 py-2 text-white hover:bg-brightRedLight focus:outline-none"
                        >
                            Go
                        </button>
                    </div>
                </form>
                <div class="hidden text-white md:block">
                    Copyright &copy; 2022, All Rights Reserved
                </div>
            </div>
        </div>
    </footer>
  )
}
export default Footer