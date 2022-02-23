
export const Register = () => {
    return(
        <section>
            <form>
                <div>
                    <label>Usuário</label>
                    <input type="text" required minLength={4}/>
                </div>

                <div>
                    <label>Senha</label>
                    <input type="password" required minLength={8}/>
                </div>

                <div>
                    <label>Nick (Apex)</label>
                    <input type="text" required minLength={4}/>
                </div>
                
                <button>Cadastrar</button>
            </form>
        </section>
    )
}