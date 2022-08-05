import { GetStaticProps } from "next"
import { getUsers } from "../lib/users"

interface UserProps {
    id: string
    name: string
}

interface Props {
    users: UserProps[]
}

export default function Home({ users }: Props) {

    return (
        <>
            <h1>Hello ApiNext</h1>
            {users?.map(user => (
                <div key={user.id}>
                    <h2>
                        <strong>{user.id}</strong> {user.name}
                    </h2>
                </div>
            ))}
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const users = await getUsers()

    return {
        props: {
            users
        },
        revalidate: 5
    }
}
